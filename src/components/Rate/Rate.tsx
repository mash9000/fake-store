import styles from './rate.module.scss';
import type {RateProps} from "./RateProps.ts";
import type {FC} from "react";

export const Rate: FC<RateProps> = ({value, numberOfReviews}) => {
    return (
        <div className={styles['rate']}>{value} ({numberOfReviews})</div>
    );
}