/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:phytomorphic_synthesiszer")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#F22291FF')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Phytomorphic synthesiszer WIP')
        /**
         * The multiblock definition
         */
        .structure(
            /**
             * Creates the structure builder
             */
            MMRStructureBuilder.create()
                /**
                 * Sets the patten (bottom to top and front to back)
                 * Must have ONLY one `m` representing the controller block
                 */
                .pattern(
                    [
                        ["rfr", "fpf", "rir"],
                        ["rmr", "i i", "rer"],
                        ["rfr", "fpf", "rir"]
                    ]
                )
                /**
                 * Sets the block/blockstate, block tag or array of block/blockstates for the key defined in the patten
                 * if any key defined in pattern is missing here (except `m` of machine) the machine will not be loaded and an error is thrown
                 * if any key defined below is not present in the pattern it will be ignored
                 *
                 * The available tags from mmr are:
                 *
                 * #modular_machinery_reborn:all_casing -> includes every tag defined below
                 * #modular_machinery_reborn:casing
                 * #modular_machinery_reborn:energyhatch
                 * #modular_machinery_reborn:energyinputhatch
                 * #modular_machinery_reborn:energyoutputhatch
                 * #modular_machinery_reborn:fluidhatch -> includes input and output tags for fluids(ae2 included)
                 * #modular_machinery_reborn:fluidinputhatch
                 * #modular_machinery_reborn:fluidoutputhatch
                 * #modular_machinery_reborn:itembus -> includes input and output tags for items(ae2 included)
                 * #modular_machinery_reborn:inputbus
                 * #modular_machinery_reborn:outputbus
                 * #modular_machinery_reborn:experiencehatch -> includes input and output tags for experience(ae2 included)
                 * #modular_machinery_reborn:experienceinputhatch
                 * #modular_machinery_reborn:experienceoutputhatch
                 *
                 * Only if mekanism addon available
                 * #modular_machinery_reborn_mekanism:chemicalhatch -> includes input and output tags for chemicals(ae2 included)
                 * #modular_machinery_reborn_mekanism:chemicalinputhatch
                 * #modular_machinery_reborn_mekanism:chemicaloutputhatch
                 * Only if mekanism and ae2 addon available
                 * #modular_machinery_reborn_energistics:me_chemical_hatch
                 * #modular_machinery_reborn_energistics:me_chemical_inputhatch
                 * #modular_machinery_reborn_energistics:me_chemical_outputhatch
                 *
                 * Only if ars addon available
                 * #modular_machinery_reborn_ars:sourcehatch -> includes input and output tags for source(ae2 included)
                 * #modular_machinery_reborn_ars:sourceinputhatch
                 * #modular_machinery_reborn_ars:sourceputputhatch
                 * Only if ars and ae2 addon available
                 * #modular_machinery_reborn_energistics:me_source_hatch
                 * #modular_machinery_reborn_energistics:me_source_inputhatch
                 * #modular_machinery_reborn_energistics:me_source_outputhatch
                 *
                 * Only if ae2 addon available
                 * #modular_machinery_reborn_energistics:me_itembus
                 * #modular_machinery_reborn_energistics:me_iteminputbus
                 * #modular_machinery_reborn_energistics:me_itemoutputbus
                 * #modular_machinery_reborn_energistics:me_fluidhatch
                 * #modular_machinery_reborn_energistics:me_fluidinputhatch
                 * #modular_machinery_reborn_energistics:me_fluidoutputhatch
                 * #modular_machinery_reborn_energistics:me_experiencehatch
                 * #modular_machinery_reborn_energistics:me_experienceinputhatch
                 * #modular_machinery_reborn_energistics:me_experienceoutputhatch
                 */
                .keys(
                    {
                        /**
                         * Exact block
                         */
                        "r": "modular_machinery_reborn:casing_reinforced",
                        "f": "modular_machinery_reborn:casing_firebox",
                        "p": "modular_machinery_reborn:casing_plain",
                        /**
                         * Blocks defined in the tag
                         */
                        "e": "#modular_machinery_reborn:energyinputhatch",
                        /**
                         * Exact blocks that can be in that position
                         */
                        "i": [
                            "#modular_machinery_reborn:inputbus",
                            "#modular_machinery_reborn:fluidoutputhatch",
                            "#modular_machinery_reborn_mekanism:chemicaloutputhatch",
                            "#modular_machinery_reborn:outputbus",
                            "modular_machinery_reborn:biome_reader",
                            "modular_machinery_reborn:dimensional_detector",
                            "modular_machinery_reborn:weather_sensor",
                            "modular_machinery_reborn:time_counter",
                            "modular_machinery_reborn:chunkloader"
                        ]
                    }
                )
        )
        
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/