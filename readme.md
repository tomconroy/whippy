# Whippy

Super simple SASS mixins for creating flexible, semantic grid systems.

Whippy works by applying padding to both sides of a grid cell, then pulling out the left and right with negative margins. Use whole pixels for gutter values to make sure everything lines up.

### Usage

Copy `_whippy.scss` to your project, declare variables and import:

```scss
$max-columns: 12;
$gutter: 20px;
@import 'whippy';
```

Markup should look a bit like this:

```html
<div class="grid-container">
  <div class="grid-cell"></div>
  <div class="grid-cell">
    <div class="grid-container">
      <div class="nested-grid-cell"></div>
      <div class="nested-grid-cell"></div>
      <div class="nested-grid-cell"></div>
    </div>
  </div>
</div>
```

Include `grid` on containers and `col($number, $context)` on grid cells. E.g. an element that spans 1/3 of its container will be `@include col(1,3)` (or `col(8,12)`).

```scss
.grid-container {
  @include grid;
}
.grid-cell {
  @include col(6,12);
}
.nested-grid-cell {
  @include col(2,6); // since we’re inside a 6-col wide grid
}
```