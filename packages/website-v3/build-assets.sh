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
cat ../../src/components/Bingo.module.css >> dist/style/module.css
cat ../../src/components/Breadcrumbs.module.css >> dist/style/module.css
cat ../../src/components/Canvas/Canvas.module.css >> dist/style/module.css
cat ../../src/components/CardGroup.module.css >> dist/style/module.css
cat ../../src/components/ComponentCard.module.css >> dist/style/module.css
cat ../../src/components/ComponentCriteriaList.module.css >> dist/style/module.css
cat ../../src/components/ComponentIllustration/ComponentIllustration.module.css >> dist/style/module.css
cat ../../src/components/ComponentOverview.module.css >> dist/style/module.css
cat ../../src/components/ComponentPage.module.css >> dist/style/module.css
cat ../../src/components/ContrastRatio.module.css >> dist/style/module.css
cat ../../src/components/CoreTeam/CoreTeam.module.css >> dist/style/module.css
cat ../../src/components/DSWSession.module.css >> dist/style/module.css
cat ../../src/components/DefinitionList.module.css >> dist/style/module.css
cat ../../src/components/EstafetteBadge.module.css >> dist/style/module.css
cat ../../src/components/ExternalLink.module.css >> dist/style/module.css
cat ../../src/components/Guideline.module.css >> dist/style/module.css
cat ../../src/components/HomepageHero.module.css >> dist/style/module.css
cat ../../src/components/HomepageUpdates.module.css >> dist/style/module.css
cat ../../src/components/Icons.module.css >> dist/style/module.css
cat ../../src/components/InlineHeadingGroup.module.css >> dist/style/module.css
cat ../../src/components/MainNav.module.css >> dist/style/module.css
cat ../../src/components/SessionTable.module.css >> dist/style/module.css
cat ../../src/components/StatusVisual.module.css >> dist/style/module.css
cat ../../src/components/Story.module.css >> dist/style/module.css
cat ../../src/components/TaskList.module.css >> dist/style/module.css
cat ../../src/components/VideoPlayer.module.css >> dist/style/module.css
cat ../../src/components/WcagHeadingGroup.module.css >> dist/style/module.css
cat ../../src/components/examples/GraffitiForm.module.css >> dist/style/module.css
cat ../../src/pages/contrast/index.module.css >> dist/style/module.css
cat ../../src/pages/index.module.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/CloseButton/styles.module.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/Content/styles.module.css >> dist/style/module.css
cat ../../src/theme/AnnouncementBar/styles.module.css >> dist/style/module.css
cat ../../src/theme/BlogPostItems/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocCard/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocCategoryGeneratedIndexPage/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocPage/Layout/Sidebar/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocSidebar/Desktop/Content/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocSidebar/Desktop/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocSidebarItem/Html/styles.module.css >> dist/style/module.css
cat ../../src/theme/DocSidebarItem/Link/styles.module.css >> dist/style/module.css
cat ../../src/theme/Footer/Layout/Layout.module.css >> dist/style/module.css
cat ../../src/theme/Footer/Logo/styles.module.css >> dist/style/module.css
cat ../../src/theme/MDXComponents/Img/styles.module.css >> dist/style/module.css
cat ../../src/theme/MDXComponents/Ul/styles.module.css >> dist/style/module.css
cat ../../src/theme/Navbar/ColorModeToggle/styles.module.css >> dist/style/module.css
cat ../../src/theme/Navbar/Logo/Logo.module.css >> dist/style/module.css
cat ../../src/theme/Navbar/MobileSidebar/Header/Header.module.css >> dist/style/module.css
cat ../../src/theme/Navbar/MobileSidebar/Layout/Layout.module.css >> dist/style/module.css
cat ../../src/theme/Navbar/Search/Search.module.css >> dist/style/module.css
cat ../../src/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css >> dist/style/module.css
cat ../../src/theme/ThemedImage/styles.module.css >> dist/style/module.css
