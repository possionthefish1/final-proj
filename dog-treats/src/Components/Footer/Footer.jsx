import styles from './Footer.module.css';

function Footer() {
	return (
		<div className={[styles.card, styles.info, 'text-7xl'].join(' ')}>
			Footer
		</div>
	);
}

export default Footer;
