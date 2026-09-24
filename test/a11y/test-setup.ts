import { AxeBuilder } from '@axe-core/playwright';
import { writeFile } from 'fs/promises';
import { readFileSync } from 'node:fs';
import * as cheerio from 'cheerio';
import { exclusions, exclusionGroups, skippedRoutes, type RouteExclusion } from './a11y-exclusions';
import type { Page } from '@playwright/test';

export async function analyzeAccessibility(page: Page, disabledRules: string[]) {
  return new AxeBuilder({ page })
    .options({ resultTypes: ['violations'] })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .disableRules(disabledRules)
    .exclude('[data-test-axe="false"]')
    .analyze();
}

export async function saveViolationsReport(reportData: unknown[], filePath: string): Promise<void> {
  console.log(`Writing accessibility report to ${filePath}`);
  await writeFile(filePath, JSON.stringify(reportData, null, 2));
}

export function getDisabledRules(pathname: string, _exclusions: RouteExclusion[] = exclusions): string[] {
  const disabledRules = new Set<string>();

  for (const exclusion of _exclusions) {
    const isMatch = exclusion.routes.some((route) => {
      if (typeof route === 'string') {
        if (route === '*') return true;
        return route === pathname;
      }
      return route.test(pathname);
    });

    if (isMatch) {
      if (exclusion.rules) {
        exclusion.rules.forEach((rule) => disabledRules.add(rule));
      }
      if (exclusion.groups) {
        exclusion.groups.forEach((groupName) => {
          const groupRules = exclusionGroups[groupName];
          if (groupRules) {
            groupRules.forEach((rule) => disabledRules.add(rule));
          } else {
            throw new Error(`Exclusion group '${groupName}' not found in configuration.`);
          }
        });
      }
      if (exclusion.excludeIds) {
        exclusion.excludeIds.forEach((id) => {
          if (typeof id === 'string') {
            disabledRules.add(id);
          }
        });
      }
    }
  }

  return Array.from(disabledRules);
}

export function getExcludedViolationIds(pathname: string): RegExp[] {
  const excluded: RegExp[] = [];

  for (const exclusion of exclusions) {
    const isMatch = exclusion.routes.some((route) => {
      if (typeof route === 'string') {
        if (route === '*') return true;
        return route === pathname;
      }
      return route.test(pathname);
    });

    if (isMatch && exclusion.excludeIds) {
      exclusion.excludeIds.forEach((id) => {
        if (typeof id !== 'string') {
          excluded.push(id);
        }
      });
    }
  }

  return excluded;
}

export function getPathnamesFromSitemap(sitemapDir: string, sitemapPath: string): string[] {
  const paths: string[] = [];

  try {
    const sitemapIndex = readFileSync(`${sitemapDir}${sitemapPath}`, 'utf8');
    const $ = cheerio.load(sitemapIndex, { xmlMode: true });

    $('sitemap loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((path) => {
        getPathnamesFromSitemap(sitemapDir, path).forEach((p) => paths.push(p));
      });

    $('url loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((path) => paths.push(path));

    return Array.from(new Set(paths));
  } catch (error) {
    console.warn(
      `Could not read sitemap at ${sitemapDir}${sitemapPath}, skipping accessibility tests generation.`,
      error,
    );
    return [];
  }
}

export function shouldSkipRoute(pathname: string): boolean {
  return skippedRoutes.some((route) => {
    if (typeof route === 'string') {
      if (route.endsWith('*')) {
        return pathname.startsWith(route.slice(0, -1));
      }
      return route === pathname;
    }
    return route.test(pathname);
  });
}
