const cropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

const secondarySeed = 0.01
const secondarySeedTierCutoff = 5

ServerEvents.tags('item', event => {
  let cropRegistryInstance = cropRegistry.getInstance()
  let cropTiers = cropRegistryInstance.getTiers()
  let farmlandTiers = Array(cropTiers.length)

  for (const cropTier of cropTiers) {
    farmlandTiers[cropTier.getValue() - 1] = cropTier.getFarmland()

    if (cropTier.getValue() >= secondarySeedTierCutoff) {
      cropTier.setSecondarySeedDrop(false)
      cropTier.setBaseSecondaryChance(0)
    } else {
      cropTier.setBaseSecondaryChance(secondarySeed)
    }
  }

  for (let i = 0; i < farmlandTiers.length - 1; i++) {
    for (let t = 0; t <= i; t++) {
      event.add(`kubejs:farmland/${farmlandTiers[t].getIdLocation().getPath().replace('_farmland', '')}`, farmlandTiers[i].getId())
    }
  }
})

ServerEvents.recipes(event => {
  if (Platform.isLoaded('immersiveengineering')) {
    let crops = cropRegistry.getInstance().getCrops()
    crops.forEach(crop => {
      if (!crop.isEnabled()) return
      event.custom({
        type: 'immersiveengineering:cloche',
        results: [
          {
            basePredicate: {
              item: crop.getEssenceItem().getId()
            },
            count: 2
          }
        ],
        input: Ingredient.of(crop.getSeedsItem()).toJson(),
        soil: Ingredient.of(crop.getCruxBlock() ?? `#kubejs:farmland/${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`).toJson(),
        time: 250 + (750 * crop.getTier().getValue()),
        render: {
          type: 'immersiveengineering:crop',
          block: crop.getCropBlock().getId()
        }
      })
    })
  }
})
