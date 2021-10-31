import { withRouter } from 'react-router-dom';

import { Icon } from "../../styles/style";

function SearchIcon(props) {
    const goSearch= () => props.history.push('/search');
    return (
        <Icon onClick={goSearch}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1244 22.3258L12.7426 14.9426C9.45872 17.2773 4.93372 16.7062 2.33286 13.6289C-0.267992 10.5516 -0.0770181 5.99472 2.77219 3.14583C5.62065 0.2957 10.178 0.1039 13.2559 2.70462C16.3337 5.30534 16.9051 9.83078 14.5703 13.1149L21.9522 20.4981L20.1257 22.3245L20.1244 22.3258ZM8.25144 3.4584C5.80206 3.45785 3.68888 5.1772 3.19131 7.57552C2.69373 9.97383 3.94853 12.3919 6.19598 13.3658C8.44344 14.3397 11.0659 13.6017 12.4755 11.5986C13.8852 9.59548 13.6946 6.87786 12.0192 5.09108L12.8007 5.86608L11.9198 4.98775L11.9043 4.97225C10.9378 3.99985 9.62241 3.4547 8.25144 3.4584Z" fill="black" />
            </svg>
        </Icon>
    );
}

export default withRouter(SearchIcon);