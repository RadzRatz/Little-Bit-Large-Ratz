MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:data_extractor")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#00191919')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name('Data extractor')
        /**
         * The multiblock definition
         */
        .structure(
        MMRStructureBuilder.create()

        .pattern([["aba","cbc","aba"],["ama","c c","aba"],["aba","cbc","aba"]])

        .keys({"a": ["[hostilenetworks:loot_fabricator]"],
        "b":["#modular_machinery_reborn:inputbus",
        "modular_machinery_reborn:casing_plain",
        "#modular_machinery_reborn:outputbus",
        "#modular_machinery_reborn:energyinputhatch"
        ],
        "c":"modular_machinery_reborn:casing_vent",
       }))
})