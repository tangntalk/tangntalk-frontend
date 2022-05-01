import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      //에러 로그 기록or처리 부분. 그냥 콘솔에 띄움
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <h1>에러가 발생했습니다.</h1>;
        }

        return this.props.children; 
    }
}