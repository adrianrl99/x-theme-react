import { useTranslation } from 'react-i18next'

import { XButton, XCenter, XList } from '~/components'
import {
  XButtonVariantList,
  XThemeColorList,
  XThemeSizeList,
} from '~/utils/constants'

const SectionButtons = () => {
  const { t } = useTranslation()

  return (
    <XCenter>
      <XList gap={3} direction="column">
        {XButtonVariantList.map((variant, variantIndex) => (
          <XList key={`${variantIndex}-${variant}`} gap={2} direction="column">
            {XThemeSizeList.map((size, sizeIndex) => (
              <XList
                key={`${variantIndex}-${variant}_${sizeIndex}-${size}`}
                gap={2}
                direction="row"
                justifyContent="space-around"
              >
                {XThemeColorList.map((color, colorIndex) => (
                  <XButton
                    key={`${variantIndex}-${variant}_${sizeIndex}-${size}_${colorIndex}-${color}`}
                    size={size}
                    color={color}
                    variant={variant}
                  >
                    {t('button')}
                  </XButton>
                ))}
              </XList>
            ))}
          </XList>
        ))}
      </XList>
    </XCenter>
  )
}

export default SectionButtons
