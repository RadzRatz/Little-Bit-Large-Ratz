/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {

    //Wood Seed
    catalyst.remove({ output: 'mysticalagriculture:wood_seeds' });

    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:inferium_essence' },
        { tag: 'minecraft:logs' },
        { item: 'mysticalagriculture:inferium_essence' },
        { tag: 'minecraft:logs' },
        { item: 'mysticalagriculture:inferium_essence' },
        { tag: 'minecraft:logs' },
        { item: 'mysticalagriculture:inferium_essence' },
        { tag: 'minecraft:logs' }
        ],
        result: { id: 'mysticalagriculture:wood_seeds' }
    })
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/