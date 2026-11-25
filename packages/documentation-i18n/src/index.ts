export type I18nLanguages = 'nl' | 'en';

export interface Translation {
  breadcrumbLabel: string;
  close: string;
  footerNavLabel: string;
  logoAlt: string;
  logoLinkAlt: string;
  mainNavLabel: string;
  menu: string;
  open: string;
  search: string;
  searchAriaLabel: string;
  searchRequiredError: string;
  skipLink: string;
  subnavigation: string;
  watch: string;
  wcagEvaluation: {
    about_the_evaluation: string;
    auditor: string;
    client: string;
    conformance_level: string;
    criteria_explained: string;
    digitoegankelijk_link_language_note: string;
    digitoegankelijk_status: string;
    digitoegankelijk_status_is: string;
    digitoegankelijk_status_label: {
      A: string;
      B: string;
      C: string;
      D: string;
      E: string;
    };
    evaluation_additionalReq: string;
    evaluation_conformanceTarget: string;
    evaluation_date: string;
    evaluation_method: string;
    evaluation_scope: string;
    evaluation_specifics: string;
    evaluation_summary: string;
    evaluation_supportbaseline: string;
    evaluation_wcagVersion: string;
    for: string;
    issue_found_singular: string;
    issues_found_multiple: string;
    only_show_does_not_suffice: string;
    outcome: {
      cantTell: string;
      failed: string;
      inapplicable: string;
      passed: string;
      untested: string;
    };
    principles: string;
    random_sample_summary: string;
    read_more_at_NLDS: string;
    results_per_criterion_title: string;
    sample_summary: string;
    sample_title: string;
    show_all: string;
    success_criterion: string;
    summary: string;
    used_technologies: string;
    used_technologies_intro: string;
    website_found_issues: string;
    website_not_compliant: string;
  };
}

export const i18n: Record<I18nLanguages, Translation> = {
  en: {
    breadcrumbLabel: 'Breadcrumbs',
    close: 'Close',
    footerNavLabel: 'Submenu',
    logoAlt: 'Logo of NL Design System',
    logoLinkAlt: 'Logo of NL Design System, to the homepage',
    mainNavLabel: 'Main menu',
    menu: 'Menu',
    open: 'Open',
    search: 'Search',
    searchAriaLabel: 'Searchterm',
    searchRequiredError: 'This field is required, but it was left empty.',
    skipLink: 'To main content',
    subnavigation: 'subnavigation',
    watch: 'Watch',
    wcagEvaluation: {
      about_the_evaluation: 'About the evaluation',
      auditor: 'Auditor',
      client: 'Client',
      conformance_level: 'Conformance level',
      criteria_explained: 'WCAG success criteria explained',
      digitoegankelijk_link_language_note: '(in Dutch)',
      digitoegankelijk_status: 'The DigiToegankelijk status',
      digitoegankelijk_status_is: 'of this website will be:',
      digitoegankelijk_status_label: {
        A: 'Fully compliant',
        B: 'Partially compliant',
        C: 'Initial measures taken',
        D: 'Not compliant',
        E: 'No statement',
      },
      evaluation_additionalReq: 'Additional requirements',
      evaluation_conformanceTarget: 'WCAG conformance target',
      evaluation_date: 'Evaluation date',
      evaluation_method: 'Evaluation method',
      evaluation_scope: 'Scope of the evaluation',
      evaluation_specifics: 'Specifics',
      evaluation_summary:
        'Evaluation of {{totalSummary}} of the {{totalCriteria}} success criteria for WCAG {{wcagVersion}} Level {{conformanceTarget}}.',
      evaluation_supportbaseline: 'Baseline requirements for accessible experience',
      evaluation_wcagVersion: 'WCAG version',
      for: 'for',
      issue_found_singular: 'Issue found',
      issues_found_multiple: 'Issues found',
      only_show_does_not_suffice: "Only show 'failed' criteria",
      outcome: {
        cantTell: 'Cannot be determined',
        failed: 'Failed',
        inapplicable: 'Not applicable',
        passed: 'Passed',
        untested: 'Not tested',
      },
      principles: 'Principles',
      random_sample_summary:
        'To meet the WCAG-EM sampling requirement, the following {{randomSampleLength}} pages were also selected at random and examined for accessibility:',
      read_more_at_NLDS: 'Read more at NL Design System (in Dutch)',
      results_per_criterion_title: 'Results per WCAG success criterion',
      sample_summary: 'The following {{structuredSampleLength}} pages have been examined for accessibility:',
      sample_title: 'The sample',
      show_all: 'Show all successcriteria',
      success_criterion: 'Success criterion',
      summary: 'Summary',
      used_technologies: 'Used technologies',
      used_technologies_intro: 'The following technologies were used to create the website:',
      website_found_issues: 'Issues found',
      website_not_compliant:
        'The website does not meet WCAG success criteria on certain pages. Improvements are still needed for the following success criteria:',
    },
  },
  nl: {
    breadcrumbLabel: 'Kruimelpad',
    close: 'Sluiten',
    footerNavLabel: 'Submenu',
    logoAlt: 'Logo van NL Design System',
    logoLinkAlt: 'Logo van NL Design System, naar de homepage',
    mainNavLabel: 'Hoofdmenu',
    menu: 'Menu',
    open: 'Open',
    search: 'Zoeken',
    searchAriaLabel: 'Zoekterm',
    searchRequiredError: 'Dit veld is verplicht, maar het is niet ingevuld.',
    skipLink: 'Naar de inhoud',
    subnavigation: 'subnavigatie',
    watch: 'Bekijk',
    wcagEvaluation: {
      about_the_evaluation: 'Over de evaluatie',
      auditor: 'Onderzoeker',
      client: 'Opdrachtgever',
      conformance_level: 'Niveau',
      criteria_explained: 'WCAG-succescriteria uitgelegd',
      digitoegankelijk_link_language_note: ' ',
      digitoegankelijk_status: 'De DigiToegankelijk status',
      digitoegankelijk_status_is: 'van deze website zal zijn:',
      digitoegankelijk_status_label: {
        A: 'Voldoet volledig',
        B: 'Voldoet gedeeltelijk',
        C: 'Eerste maatregelen genomen',
        D: 'Voldoet niet',
        E: 'Geen verklaring',
      },
      evaluation_additionalReq: 'Aanvullende afspraken',
      evaluation_conformanceTarget: 'Doel WCAG niveau',
      evaluation_date: 'Evaluatiedatum',
      evaluation_method: 'Evaluatiemethode',
      evaluation_scope: 'Scope van het onderzoek',
      evaluation_specifics: 'Bijzonderheden',
      evaluation_summary:
        'Evaluatie van {{totalSummary}} van de {{totalCriteria}} succescriteria voor WCAG {{wcagVersion}} Niveau {{conformanceTarget}}.',
      evaluation_supportbaseline: 'Basiseisen voor een toegankelijke ervaring',
      evaluation_wcagVersion: 'WCAG-versie',
      for: 'Voor',
      issue_found_singular: 'Gevonden probleem',
      issues_found_multiple: 'Gevonden problemen',
      only_show_does_not_suffice: "Toon alleen 'Voldoet niet'",
      outcome: {
        cantTell: 'Kan niet worden vastgesteld',
        failed: 'Voldoet niet',
        inapplicable: 'Niet van toepassing',
        passed: 'Voldoet',
        untested: 'Niet getest',
      },
      principles: 'Uitgangspunten',
      random_sample_summary:
        "Om te voldoen aan de WCAG-EM steekproefeis zijn de volgende {{randomSampleLength}} pagina's eveneens willekeurig geselecteerd en onderzocht op toegankelijkheid:",
      read_more_at_NLDS: 'Lees meer bij NL Design System',
      results_per_criterion_title: 'Resultaten per WCAG-succescriterium',
      sample_summary: "De volgende {{structuredSampleLength}} pagina's zijn onderzocht op toegankelijkheid:",
      sample_title: 'De steekproef',
      show_all: 'Toon alle succescriteria',
      success_criterion: 'Succescriterium',
      summary: 'Samenvatting',
      used_technologies: 'Gebruikte technieken',
      used_technologies_intro: 'De volgende technieken zijn gebruikt om de website mee te maken:',
      website_found_issues: 'Problemen gevonden',
      website_not_compliant:
        "De website voldoet op bepaalde pagina's niet aan WCAG succescriteria. Voor de volgende succescriteria zijn nog verbeteringen nodig:",
    },
  },
};
