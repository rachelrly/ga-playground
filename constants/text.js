export const TEXT = `
color.scale() for fluidly scaling a colors properties.
color.change() for setting a colors properties.
SCSSSass
SASS SYNTAX
@debug color.adjust(#6b717f, $red: 15)  // #7a717f
@debug color.adjust(#d2e1dd, $red: -10, $blue: 10)  // #c8e1e7
@debug color.adjust(#998099, $lightness: -30%, $alpha: -0.4)  // rgba(71, 57, 71, 0.6)
adjust-hue($color, $degrees) //=> color 
Increases or decreases $colors hue.
The $hue must be a number between -360deg and 360deg (inclusive) to add to $colors hue. It may be unitless but it may not have any unit other than deg.
See also color.adjust(), which can adjust any property of a color.
Because adjust-hue() is redundant with adjust(), its not included directly in the new module system. Instead of adjust-hue($color, $amount), you can write color.adjust($color, $hue: $amount).
SCSSSass
SASS SYNTAX
// Hue 222deg becomes 282deg.
@debug adjust-hue(#6b717f, 60deg)  // #796b7f
// Hue 164deg becomes 104deg.
@debug adjust-hue(#d2e1dd, -60deg)  // #d6e1d2
// Hue 210deg becomes 255deg.
@debug adjust-hue(#036, 45)  // #1a0066
color.alpha($color)
alpha($color)
opacity($color) //=> number 
Returns the alpha channel of $color as a number between 0 and 1.
As a special case, this supports the Internet Explorer syntax alpha(opacity=20), for which it returns an unquoted string.See also:
color.red() for getting a colors red channel.
color.green() for getting a colors green channel.
color.blue() for getting a colors blue channel.
color.hue() for getting a colors hue.
color.saturation() for getting a colors saturation.
color.lightness() for getting a colors lightness.`