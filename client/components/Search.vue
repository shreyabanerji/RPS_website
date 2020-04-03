<template>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-7" viewBox="0 0 40 42">
    <path d="M16.85 33.702c9.307 0 16.852-7.545 16.852-16.85C33.702 7.543 26.157 0 16.852 0 7.543 0 0 7.544 0 16.85c0 9.307 7.544 16.852 16.85 16.852zm0-2.81c7.756 0 14.043-6.286 14.043-14.04 0-7.757-6.287-14.044-14.042-14.044S2.81 9.095 2.81 16.85c0 7.756 6.287 14.043 14.043 14.043zm11.235 2.288l3.97-3.972L40 37.152l-3.972 3.97-7.943-7.942z"
    fill-rule="evenodd" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-4" viewBox="0 0 20 20">
    <path d="M11.664 9.877l4.485 4.485-1.542 1.54-4.485-4.485-4.485 4.485-1.54-1.54 4.485-4.485-4.485-4.485 1.54-1.54 4.485 4.484 4.485-4.485 1.54 1.542-4.484 4.485zM10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z" fill-rule="evenodd"
    />
  </symbol>
</svg>

<form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom">
  <div role="search" class="sbx-custom__wrapper">
    <input type="search" name="search" placeholder="Search your website" autocomplete="off" required="required" class="sbx-custom__input">
    <button type="submit" title="Submit your search query." class="sbx-custom__submit">
      <svg role="img" aria-label="Search">
        <use xlink:href="#sbx-icon-search-7"></use>
      </svg>
    </button>
    <button type="reset" title="Clear the search query." class="sbx-custom__reset">
      <svg role="img" aria-label="Reset">
        <use xlink:href="#sbx-icon-clear-4"></use>
      </svg>
    </button>
  </div>
</form>
</div>
</template>
