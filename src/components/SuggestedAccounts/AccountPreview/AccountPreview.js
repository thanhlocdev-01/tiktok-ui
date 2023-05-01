import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/801085f04b1cd34b90be3a605b62ea01~c5_100x100.jpeg?x-expires=1682834400&x-signature=wFIzGBiOJ9gB5yAhZrLbnE2F2ps%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                            <strong>mai3.5.03</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Mai</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>3.5M </strong>
                            <span className={cx('label')}>Followers </span>
                            <strong className={cx('value')}>29.9M </strong>
                            <span className={cx('label')}>Likes</span>
                        </p>
            </div>
        </div>
    );
}

export default AccountPreview;
