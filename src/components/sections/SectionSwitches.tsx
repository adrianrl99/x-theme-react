import type { ChangeEvent } from 'react'
import { useState } from 'react'

import { XCenter, XList, XSwitch } from '~/components'
import { XThemeColorList, XThemeSizeList } from '~/utils/constants'

const SectionSwitches = () => {
  const [state, setState] = useState(
    new Array(XThemeSizeList.length * XThemeColorList.length).fill(false),
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) =>
    setState({ ...state, [index]: event.target.checked })

  return (
    <XCenter>
      <XList gap={3} direction="column">
        {XThemeSizeList.map((size, sizeIndex) => (
          <XList
            key={`${sizeIndex}-${size}`}
            gap={2}
            direction="row"
            justifyContent="space-around"
          >
            {XThemeColorList.map((color, colorIndex) => (
              <XSwitch
                key={`${sizeIndex}-${size}_${colorIndex}-${color}`}
                size={size}
                color={color}
                checked={state[XThemeColorList.length * sizeIndex + colorIndex]}
                onChange={event =>
                  handleChange(
                    event,
                    XThemeColorList.length * sizeIndex + colorIndex,
                  )
                }
              />
            ))}
          </XList>
        ))}
      </XList>
    </XCenter>
  )
}

export default SectionSwitches
