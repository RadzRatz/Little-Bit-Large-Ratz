/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {

    //Industrial Foregoing Dry Rubber
    catalyst.shaped(
        Item.of('industrialforegoing:dryrubber', 6),
    [
        '   ',
        'AAA',
        '   '
    ],
    {
        A: 'mysticalagriculture:rubber_essence'
    }
)
    
    //Productive Trees Rubber
    catalyst.shaped(
        Item.of('productivetrees:cured_rubber', 6), 
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: 'mysticalagriculture:rubber_essence'
    }
)
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/