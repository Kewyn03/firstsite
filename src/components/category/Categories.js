import React from 'react'
import {Icon, Input} from 'semantic-ui-react'

const Categories = () => (
    <div>
        <Input list='categories' placeholder='Все' />
        <datalist id='categories'>
            <option value='Обычное' />
            <option value='StatTrak'/>
            <option value='Сувенир'/>

            <option value='star'> <Icon name="star" /> </option>

        </datalist>
    </div>
)


export default Categories

