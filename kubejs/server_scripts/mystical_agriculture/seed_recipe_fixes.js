/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    function FixSeed(seedbase, output, input, essence) {
        catalyst.remove({ output: output })

        catalyst.custom({
            type: 'mysticalagriculture:infusion',
            input: { item: seedbase },
            ingredients: [
                { item: essence }, { tag: input },
                { item: essence }, { tag: input },
                { item: essence }, { tag: input },
                { item: essence }, { tag: input }
            ],
            result: { id: output }
        });
    }

    const seeds = [
        ['mysticalagriculture:wood_seeds', 'minecraft:logs', 'mysticalagriculture:inferium_essence'],
        ['mysticalagriculture:rubber_seeds', 'c:rubber', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:silicon_seeds', 'c:silicon', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:sulfur_seeds', 'c:dusts/sulfur', 'mysticalagriculture:prudentium_essence'],
        ['mysticalagriculture:steel_seeds', 'c:ingots/steel', 'mysticalagriculture:imperium_essence'],
        ['mysticalagriculture:saltpeter_seeds', 'c:dusts/niter', 'mysticalagriculture:prudentium_essence']
        ['mysticalagriculture:tin_seeds', 'c:ingots/tin', 'mysticalagriculture:tertium_essence']
    ];

    seeds.forEach(([output, input, essence]) => {
        FixSeed('mysticalagriculture:prosperity_seed_base', output, input, essence);
    })
})
    
    /* 
    This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
    It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
    */
