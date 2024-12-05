import { UnlistedMetadata } from '@docusaurus/theme-common';

export default function Unlisted() {
  return (
    <>
      {/*
        Unlisted metadata declared here for simplicity.
        Ensures we never forget to add the correct noindex metadata.
        Also gives a central place for user to swizzle override default metadata.
        */}
      <UnlistedMetadata />
    </>
  );
}
