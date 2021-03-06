import React, {Component} from "react";
import classes from "./Layout.module.scss"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
    // eslint-disable-next-line react/require-render-return

    state = {
        menu: false
    }

    toggleMenuHandler = ()=> {
        this.setState({
            menu: !this.state.menu
        })
    }

    MenuCloseHAndler = ()=> {
        this.setState({
            menu: false
        })
    }
    
    render () {


        return (
            <div className={classes.Layout}>

                <Drawer
                 isOpen = {this.state.menu}
                 onClose = {this.MenuCloseHAndler}
                />

                <MenuToggle
                onToggle = {this.toggleMenuHandler}
                isOpen = {this.state.menu}
                >

                </MenuToggle>

                <main >
                    {this.props.children}
                </main>
                
            </div>
        )
    }
}

export default Layout