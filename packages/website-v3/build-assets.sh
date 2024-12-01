#!/bin/sh -e
mkdir -p dist/img/ dist/font/ dist/script/ dist/style/
cp -R node_modules/@fontsource/fira-sans/ dist/font/fira-sans
cp -R node_modules/@fontsource/source-sans-pro/ dist/font/source-sans-pro
cp -R node_modules/firacode/distr dist/font/firacode
cp node_modules/@nl-design-system-unstable/nlds-design-tokens/dist/theme.css dist/style/theme.css
cp node_modules/@nl-design-system/website/src/css/custom.css dist/style/custom.css
cp node_modules/@utrecht/component-library-css/dist/index.css dist/style/components.css
cp node_modules/@utrecht/root-css/dist/index.css dist/style/root.css
cp node_modules/@utrecht/body-css/dist/index.css dist/style/body.css
cp node_modules/@utrecht/page-body-css/dist/index.css dist/style/page-body.css
cp node_modules/@utrecht/page-layout-css/dist/index.css dist/style/page-layout.css
cp node_modules/@utrecht/page-footer-css/dist/index.css dist/style/page-footer.css
cp -R ../../static/* dist/

rm dist/style/module.css
touch dist/style/module.css
cat ../../src/components/Bingo.css >> dist/style/module.css
cat ../../src/components/Breadcrumbs.css >> dist/style/module.css
cat ../../src/components/Canvas/Canvas.css >> dist/style/module.css
cat ../../src/components/CardGroup.css >> dist/style/module.css
cat ../../src/components/ComponentCard.css >> dist/style/module.css
cat ../../src/components/ComponentCriteriaList.css >> dist/style/module.css
cat ../../src/components/ComponentIllustration/ComponentIllustration.css >> dist/style/module.css
cat ../../src/components/ComponentOverview.css >> dist/style/module.css
cat ../../src/components/ComponentPage.css >> dist/style/module.css
cat ../../src/components/ContrastRatio.css >> dist/style/module.css
cat ../../src/components/CoreTeam/CoreTeam.css >> dist/style/module.css
cat ../../src/components/DSWSession.css >> dist/style/module.css
cat ../../src/components/DefinitionList.css >> dist/style/module.css
cat ../../src/components/EstafetteBadge.css >> dist/style/module.css
cat ../../src/components/ExternalLink.css >> dist/style/module.css
cat ../../src/components/Guideline.css >> dist/style/module.css
cat ../../src/components/HomepageHero.css >> dist/style/module.css
cat ../../src/components/HomepageUpdates.css >> dist/style/module.css
cat ../../src/components/Icons.css >> dist/style/module.css
cat ../../src/components/InlineHeadingGroup.css >> dist/style/module.css
cat ../../src/components/MainNav.css >> dist/style/module.css
cat ../../src/components/SessionTable.css >> dist/style/module.css
cat ../../src/components/StatusVisual.css >> dist/style/module.css
cat ../../src/components/Story.css >> dist/style/module.css
cat ../../src/components/TaskList.css >> dist/style/module.css
cat ../../src/components/VideoPlayer.css >> dist/style/module.css
cat ../../src/components/WcagHeadingGroup.css >> dist/style/module.css
cat ../../src/components/examples/GraffitiForm.css >> dist/style/module.css
cat ../../src/pages/contrast/index.css >> dist/style/module.css
cat ../../src/pages/index.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/CloseButton/styles.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/Content/styles.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/styles.css >> dist/style/module.css
cat ../../src/theme/BlogPostItems/styles.css >> dist/style/module.css
cat ../../src/theme/DocCard/styles.css >> dist/style/module.css
cat ../../src/theme/DocCategoryGeneratedIndexPage/styles.css >> dist/style/module.css
cat ../../src/theme/DocPage/Layout/Sidebar/ExpandButton/styles.css >> dist/style/module.css
cat ../../src/theme/DocPage/Layout/Sidebar/styles.css >> dist/style/module.css
cat ../../src/theme/DocSidebar/Desktop/Content/styles.css >> dist/style/module.css
cat ../../src/theme/DocSidebar/Desktop/styles.css >> dist/style/module.css
cat ../../src/theme/DocSidebarItem/Html/styles.css >> dist/style/module.css
cat ../../src/theme/DocSidebarItem/Link/styles.css >> dist/style/module.css
cat ../../src/theme/Footer/Layout/Layout.css >> dist/style/module.css
cat ../../src/theme/Footer/Logo/styles.css >> dist/style/module.css
cat ../../src/theme/MDXComponents/Img/styles.css >> dist/style/module.css
cat ../../src/theme/MDXComponents/Ul/styles.css >> dist/style/module.css
cat ../../src/theme/Navbar/ColorModeToggle/styles.css >> dist/style/module.css
cat ../../src/theme/Navbar/Logo/Logo.css >> dist/style/module.css
cat ../../src/theme/Navbar/MobileSidebar/Header/Header.css >> dist/style/module.css
cat ../../src/theme/Navbar/MobileSidebar/Layout/Layout.css >> dist/style/module.css
cat ../../src/theme/Navbar/Search/Search.css >> dist/style/module.css
cat ../../src/theme/NavbarItem/LocaleDropdownNavbarItem/styles.css >> dist/style/module.css
cat ../../src/theme/ThemedImage/styles.css >> dist/style/module.css
