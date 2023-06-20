import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getUserData, logoutTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUserData()
        // this.props.getUserData(this.props.id, this.props.login, this.props.email)
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {getUserData, logoutTC})(HeaderContainer)