import React from 'react';
import profileCardImage from '../../assets/images/bg-pattern-card.svg';
import victorImage from '../../assets/images/image-victor.jpg';
import './ProfileCard.scss';
export default function ProfileCard() {
	return (
		<>
			<main>
				<div className="container">
					<div className="profile-card">
						<div className="card-image">
							<img src={profileCardImage} alt="" />
						</div>
						<div className="profile-info">
							<img src={victorImage} alt="" />
							<h1>
								Victor Crest <span> &nbsp;26</span>
							</h1>
							<p>London</p>
						</div>
						<div className="profile-stat">
							<div className="followers">
								<h2>80K</h2>
								<p>Followers</p>
							</div>
							<div className="likes">
								<h2>803K</h2>
								<p>Likes</p>
							</div>
							<div className="photos">
								<h2>1.4K</h2>
								<p>Photos</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
