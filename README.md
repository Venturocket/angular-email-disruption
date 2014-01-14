# angular-email-disruption [![Build Status](https://travis-ci.org/Venturocket/angular-email-disruption.png?branch=master)](https://travis-ci.org/Venturocket/angular-email-disruption)
Email Bot Disruption Directive for AngularJS

## Intro
This directive does its best to hide email addresses from email harvesting bots. It employs a couple different strategies:
1. text reversal
2. arbitrary HTML to split up the source
3. link insertion only on mouseover

## Usage
#### Markup
``` html
<span roofie="{ string }"
	  bob="{ string }">
	  { string | HTML }
</span>
```

### Options
property | type | description
--- | --- | ---
roofie | string | the supplied value for this determines whether the directive replaces the html or not. If "surprise" is given the html is replaced with the disrupted and reversed email address and the original text within the tag is used as the name for the email address. Otherwise, the string supplied to this property is used as the email name and the contents of the element are preserved.
bob | string | the email domain reversed 
tag content | string or HTML | if roofie="surprise" this is used as the reversed email name. Otherwise, the content is preserved and wrapped with an anchor tag on mouseover

#### Examples
This:
``` html
<span roofie="surprise" bob="moc.liame">emos</span>
```
Will result in:
``` html
<span roofie="surprise" bob="moc.liame">
	<span>moc.liame<span style='display:none;'>iie8732hfwni</span>@<span style='display:none;'>zbnbqyt87</span>emos</span>
</span>
```
But on the page will look equivalent to:
``` html
<span>some@email.com</span>
```
And when moused over will look equivalent to:
``` html
<span>
	<a href="mailto:some@email.com">some@email.com</a>
</span>
```
---
Similarly this:
``` html
<span roofie="emos" bob="moc.liame">
	<div>your html</div>
</span>
```
Turns into this when moused over:
``` html
<span roofie="emos" bob="moc.liame">
	<a href="mailto:some@email.com"><div>your html</div></a>
</span>
```
Then returns to the original html when moused out.
