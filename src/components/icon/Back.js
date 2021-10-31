import { withRouter } from 'react-router-dom';

import { Icon } from "../../styles/style";

function BackIcon(props) {
    const goBack = () => props.history.go(1);
    return (
        <Icon onClick={goBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7794 20L8.15627 12.3769C8.10673 12.3274 8.06743 12.2687 8.04062 12.204C8.0138 12.1393 8 12.07 8 12C8 11.93 8.0138 11.8607 8.04062 11.796C8.06743 11.7313 8.10673 11.6726 8.15627 11.6231L15.7794 4" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Icon>
    );
}

export default withRouter(BackIcon);