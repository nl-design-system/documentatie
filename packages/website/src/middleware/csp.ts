import { createHash } from 'node:crypto';
import * as cheerio from 'cheerio';

/**
 * Returns a SHA256 hash using SHA-2 for the given `content`.
 *
 * @param {String} content
 * @returns {String}
 */
function sha256(content) {
  return createHash('sha256').update(content).digest('base64');
}

/**
 * This middleware calculates a sha256 hash of style attributes and adds them
 * to the csp header, allowing for inline styles within the source code
 */
export async function onRequest(context, next) {
  const response = await next();
  const html = await response.text();
  const $ = cheerio.load(html);

  const hashes = new Set();
  const cspRuleElement = $('[http-equiv="content-security-policy"]');

  $('[style]').map((_, element) =>
    element.attributes
      .filter((attribute) => attribute.name === 'style')
      .map((attribute) => sha256(attribute.value))
      .forEach((hash) => {
        hashes.add(`'sha256-${hash}'`);
      }),
  );

  if (hashes.size) {
    const cspRules = cspRuleElement
      .attr('content')
      .split(';')
      .map((rule) => rule.trim())
      .map((cspRule) =>
        cspRule.startsWith('style-src') ? `${cspRule} ${[...hashes.values()].join(' ')} 'unsafe-hashes'` : cspRule,
      )
      .join('; ');

    $(cspRuleElement).attr('content', cspRules);
  }

  return new Response($.html(), {
    status: 200,
    headers: response.headers,
  });
}
