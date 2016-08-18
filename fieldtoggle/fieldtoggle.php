<?php

class FieldToggleField extends ToggleField {
          
  // Get JS and CSS files from the assets folder
  static public $assets = array(
    'js' => array(
      'f.js'
    ),
    'css' => array(
      'style.css'
    )
  );
  
  // Add information to the field data so we can access it with JavaScript
  public function item($value, $text) {
    $item = parent::item($value, $text);
    $item->addClass('fieldtoggle');
    if (isset($this->on)) {
      $item->data('on',$this->on);
    }
    if (isset($this->off)) {
      $item->data('off',$this->off);
    }
    return $item;
  }
  
}