# Kirby Fieldtoggle

This field lets panel users toggle the visibility of other fields.

## Installation

Simply put the `fieldtoggle` folder into your `site/fields` folder.

## Examples

### Image field

In this very simple example we're toggling the visibility of a single field.

![Show image](showimage.gif?raw=true)

The `on` option contains the fieldname `imagefield`. That means the image field will only be visible when the `showimages` field's value is `true`.

````
showimages:
  label:       Show image
  type:        fieldtoggle
  on:          imagefield
imagefield:
  label:       Image
  type:        image
````

### Full day events

This use case is a little more complex, but also more reasonable.

![Multiple Days](multidays.gif?raw=true)

This time we will not only use the additional option `off`, but also toggle multiple fields in the `on` option. When the `multidays` fieldtoggle is set to `true`, the fields `start` and `end` are visible, while the `day` field is hidden. When it's set to `false`, the `day` field is visible and the `start` and `end` fields are hidden.

The value of the `multidays` field is still available, so you can use a `if/else` condition in your template and display different things like you would with a regular `toggle` field.

````
multidays:
  label:       Multiple Days
  type:        fieldtoggle
  on:          start end
  off:         day
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

### Product structure field

The `fieldtoggle` field works in structure fields, too.

![Structure](structure.gif?raw=true)

This time we're setting the `default` to `false`, just as we would in a normal `toggle` field. Also, we're addressing five different fields. This way we can either display a specific contact person or a general phone number.

````
products:
  label:         Products
  type:          structure
  modalsize:     large
  fields:
    name:
      label:     Product name
      type:      text
      width:     1/2
    price:
      label:     Price
      type:      text
      icon:      euro
      width:     1/2
    description:
      label:     Description
      type:      textarea
    contactperson:
      label:       Specific contact person
      type:        fieldtoggle
      on:          contactname position portrait phone
      off:         generalphone
      default:     false
    contactname:
      label:       Name
      type:        text
      width:       1/2
    position:
      label:       Position
      type:        text
      width:       1/2
    phone:
      label:       Phone number
      type:        tel
    generalphone:
      label:       General phone number
      type:        tel
````

## Additional comments

You can use the regular `toggle` field option `text` which can either be `on/off` or `yes/no`. The value is the same: `true` or `false`.