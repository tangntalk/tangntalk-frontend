import React from "react";
import ErrorPage from "./Error";

import Header from "./Header";
import NaviBar from "./NaviBar";
import Title from "./Title";
import Wrapper from "./container/Wrapper";
import Content from "./container/Content";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      //에러 로그 기록or처리 부분. 그냥 콘솔에 띄움
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return(<h3>에러가 발생했습니다</h3>);
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;