import React from 'react';
import styles from './user.scss';

const User = (props) => (
  <div className={styles.user}>
    Hello from user!
  </div>
);

export default User;

//
// export default class User extends Component {
//   render() {
//     return (
//       <div className={styles.user}>
//         Hello from user!
//       </div>
//     );
//   }
// }
