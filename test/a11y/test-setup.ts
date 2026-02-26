import { AxeBuilder } from '@axe-core/playwright';
import { writeFile } from 'fs/promises';
import { exclusions, exclusionGroups, skippedRoutes } from './a11y-exclusions';
import type { Page } from '@playwright/test';

export async function analyzeAccessibility(page: Page, disabledRules: string[]) {
  return new AxeBuilder({ page })
    .options({ resultTypes: ['violations'] })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .disableRules(disabledRules)
    .analyze();
}

export async function saveViolationsReport(reportData: unknown[], filePath: string): Promise<void> {
  console.log(`Writing accessibility report to ${filePath}`);
  await writeFile(filePath, JSON.stringify(reportData, null, 2));
}

export function getDisabledRules(pathname: string): string[] {
  const disabledRules = new Set<string>();

  for (const exclusion of exclusions) {
    const isMatch = exclusion.routes.some((route) => {
      if (typeof route === 'string') {
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
    }
  }

  return Array.from(disabledRules);
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
