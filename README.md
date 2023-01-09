# Assets branch for NL Design System documentation

Managing large files such as images, audio, video etc. has always been one of the shortcomings of Git. As the documentation pages will also be used by organisations in their documentation we don't want to bloat those packages either.

By using this `assets` branch which only consists of those type of files which are assets and don't require history we can keep the size of the packages send to npm to a minimum while retaining the urls images will be loaded from.
