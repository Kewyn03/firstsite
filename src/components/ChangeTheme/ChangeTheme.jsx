import PropTypes from 'prop-types'
import styles from './ChangeTheme.module.css'

import {useTheme,THEME_LIGHT,THEME_DARK} from './context/ThemeProvider'

const ChangeTheme = () => {
    const isTheme = useTheme();

    return (

        <>
            {isTheme.theme}
            <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
        </>
    )
}



export default ChangeTheme;