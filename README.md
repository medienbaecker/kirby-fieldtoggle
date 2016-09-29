# Kirby Fieldtoggle v2

This field lets panel users toggle the visibility of other fields.

## Installation

Simply put the `fieldtoggle` folder into your `site/fields` folder.

## Examples

### Image field

In this very simple example we're toggling the visibility of a single field.

![Show image](showimage.gif?raw=true)

We can  use whatever number of options we want. For this example we'll stick with `yes` and `no`, though. Setting the options works exactly as it would with a regular radio field.
In the additional `show` key, we can show fields for any of the defined options. In this case we want to show the field `imagefield` when `yes` is active. Fields that are in a `show` list of an option are automatically hidden when this option is not active.

````
imagetoggle:
  label:       Show image?
  type:        fieldtoggle
  options:
    yes:       "Yes"
    no:        "No"
  show:
    yes:       imagefield
imagefield:
  label:       Image
  type:        image
````

### Full day events

This use case is a little more complex, but also more reasonable.

![Multiple Days](multidays.gif?raw=true)

This time we'll do the exact same thing, but show multiple fields at the same time. When `Multiple days` is activated, both `start` and `end` are shown. When `Single day` is activated, only `day` is visible.

````
eventtype:
  label:       Event type
  type:        fieldtoggle
  options:
    multidays: Multiple days
    singleday: Single day
  show:
    multidays: start end
    singleday: day
day:
  label:       Day
  type:        date
start:
  label:       First day
  type:        date
  width:       1/2
end:
  label:       Last day
  type:        date
  width:       1/2
````

The value of the `multidays` field is still available, so you can use an `if/else` condition in your template and display different things like you would with a regular `radio` field.

````
<? if($page->eventtype() == "multidays"): ?>
  // Code for event lasting multiple days
<? else: ?>
  // Code for event on a single day
<? endif ?>
````

### A fieldtoggle in a structure field

The `fieldtoggle` field works in structure fields, too.

![Structure](structure.gif?raw=true)

This time, we'll have a lot of options to choose from. Depending on the category of the product, fields will be shown or hidden. Just have a look at the blueprint yourself. It may be a bit longer, but it's pretty self explanatory:

````
products:
  label:              Products
  type:               structure
  modalsize:          large
  fields:
    name:
      label:          Product name
      type:           text
      width:          1/2
    price:
      label:          Price
      type:           text
      icon:           euro
      width:          1/2
    category:
      label:          Category
      type:           fieldtoggle
      options:
        digital:      Digital good
        animal:       Animal
        subscription: Subscription
        service:      Service
        coupon:       Coupon
        food:         Food
      show:
        digital:      filesize
        animal:       species diet
        subscription: start end
        service:      date employee
        food:         bestbefore
      hide:
        digital:      shipping
        service:      shipping

    shipping:
      label:          Shipping cost
      type:           text
      icon:           euro
    filesize:
      label:          Filesize
      type:           text
      icon:           download
    species:
      label:          Species
      type:           select
      icon:           paw
      options:
        - Cat
        - Dog
        - Bird
    diet:
      label:          Diet
      type:           textarea
      icon:           cutlery
    start:
      label:          First day
      type:           date
      width:          1/2
    end:
      label:          Last day
      type:           date
      width:          1/2
    date:
      label:          Date
      type:           date
    employee:
      label:          Responsible Employee
      type:           select
      options:
        - Lorena Ipsmann
        - Dolores Singh
        - Achmed al Consetecur
        - Ali Lipsing
    bestbefore:
      label:          Best before
      type:           date
````

## Additional comments

Fields with `required` set to `true` will be required, even if they're hidden.

As of version 2.3, Kirby converts every field name to lowercase in the panel. There's no differentiation between `fieldName` and `fieldname`. Thanks to LCD344 for testing that.
