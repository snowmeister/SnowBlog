# Tailwind CSS

This app is styled using [Tailwind CSS](https://tailwindcss.com/). This page lists any interesting gotchas that you might encounter when using Tailwind.

## Gotcha 1 - Dynamic class names

Nope. Not gonna happen.  Tailwind will only include classes it finds in your static code. If you use a class name that is not in your static code, it will not be included in your compiled CSS. Not Cool. 

Took me a while to find this, but it is documented pretty clearly once you find it. Read [how to add a "safe list" of class names to your Tailwind config](https://tailwindcss.com/docs/content-configuration#using-regular-expressions) on the Tailwind documentation site.