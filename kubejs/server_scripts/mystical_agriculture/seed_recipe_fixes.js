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

    //Rubber Seed
    catalyst.remove({ output: 'mysticalagriculture:rubber_seeds' });

    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:rubber' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:rubber' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:rubber' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:rubber' }
        ],
        result: { id: 'mysticalagriculture:rubber_seeds' }
    })

    //Silicon Seed
    catalyst.remove({ output: 'mysticalagriculture:silicon_seeds' });

    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:silicon' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:silicon' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:silicon' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:silicon' }
        ],
        result: { id: 'mysticalagriculture:silicon_seeds' }
    })

    //Sulfur Seed
    catalyst.remove({ output: 'mysticalagriculture:sulfur_seeds' });

    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/sulfur' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/sulfur' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/sulfur' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/sulfur' }
        ],
        result: { id: 'mysticalagriculture:sulfur_seeds' }
    })

    //Steel Seed (added this one due to Oritech adding a variation of steel)
    catalyst.remove({ output: 'mysticalagriculture:steel_seeds' });

    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:imperium_essence' },
        { tag: 'c:ingots/steel' },
        { item: 'mysticalagriculture:imperium_essence' },
        { tag: 'c:ingots/steel' },
        { item: 'mysticalagriculture:imperium_essence' },
        { tag: 'c:ingots/steel' },
        { item: 'mysticalagriculture:imperium_essence' },
        { tag: 'c:ingots/steel' }
        ],
        result: { id: 'mysticalagriculture:steel_seeds' }
    })

    //Saltpeter / Niter Seed (Not a fix, but recipe was not avaible)
    catalyst.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: 'mysticalagriculture:prosperity_seed_base' },
        ingredients: [
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/niter' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/niter' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/niter' },
        { item: 'mysticalagriculture:prudentium_essence' },
        { tag: 'c:dusts/niter' }
        ],
        result: { id: 'mysticalagriculture:saltpeter_seeds' }
    })
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
