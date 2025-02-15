/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {

    //Applied Flux Press
    catalyst.shaped(
        Item.of('appflux:energy_processor_press'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'mysticalagriculture:certus_quartz_essence',
        B: 'appflux:charged_redstone'
    }
)
    
    //AdvancedAE Press
    catalyst.shaped(
        Item.of('advanced_ae:quantum_processor_press'), 
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'mysticalagriculture:certus_quartz_essence',
        B: 'advanced_ae:shattered_singularity'
    }
)

    //ExtendedAE Press
    catalyst.shaped(
        Item.of('extendedae:concurrent_processor_press'), 
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'mysticalagriculture:certus_quartz_essence',
        B: 'extendedae:entro_crystal'
    }
)

})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/