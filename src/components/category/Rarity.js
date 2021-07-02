import React from 'react'
import { Input } from 'semantic-ui-react'

const Rarity = () => (
    <div>
        <Input list='categories' placeholder='Все' />
        <datalist id='categories'>
            <option value='Обычное' />
            <option value='StatTrak' />
            <option value='Сувенир'/>
            <option name="star" value='star' />
        </datalist>
    </div>
)


export default Rarity

