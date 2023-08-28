import React from 'react';
import ArtCard from "./artcards/artcard";

const art = () => {
    return (
        <>
            <div className='art_content'>
                <h1>My Arts</h1>
                <div className="container art_cards">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title=' Virat Kohli'
                                imageUrl='images/drawings/virat.jpg'
                                body='This is the portrait of famous Indian cricketer Virat Kohli.'
                                buttonUrl='https://m.facebook.com/story.php?story_fbid=pfbid02LhDPVEdqthRp2UvwRamSgFfvTMiQm3x3E2Ne89umMoXT9U41MJrDPga5rwMQ8UsTl&id=101095181629486&sfnsn=wiwspwa&mibextid=RUbZ1f'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='International Work'
                                imageUrl='images/drawings/International.jpg'
                                body='This is a paid work of a US person.'
                                buttonUrl='https://m.facebook.com/story.php?story_fbid=pfbid02DH31Bh6VCkqM917SGGKbVD67K3Y1LvxnjdYvavCUpy2y1Pe6raynGeRmpwde9Mi4l&id=100063916488679&mibextid=ZbWKwL'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Sunny Leone'
                                imageUrl='images/drawings/sunny.jpg'
                                body='This is the portrait of famous actress .'
                                buttonUrl='https://m.facebook.com/story.php?story_fbid=pfbid0rGgpcjGkKCRh9P9ZLDbAqfKuzzjjgciyF7XCFznDzeQpbK6DQArFFQ7doHxuPUXEl&id=101095181629486&sfnsn=wiwspwa&mibextid=RUbZ1f'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Paid Work'
                                imageUrl='images/drawings/paid5.jpg'
                                body='This is a commision art work.'
                                buttonUrl='https://m.facebook.com/story.php?story_fbid=pfbid0AegseC93ZVA2zEFcYm5y65zhDrw8HWJ1yrsGe5PdAbzp7nzp9MHU9wjBRVGGyXZ8l&id=101095181629486&sfnsn=wiwspwa&mibextid=RUbZ1f'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Shreyasi Mandal'
                                imageUrl='images/drawings/shreyasi.jpg'
                                body='This is the portrait of my friend Shreyasi Mandal.'
                                buttonUrl='https://www.facebook.com/GhoshKisan?mibextid=ZbWKwL'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Mita Ghosh '
                                imageUrl='images/drawings/mita.jpg'
                                body='This is the portrait of my mother Mita Ghosh.'
                                buttonUrl='https://m.facebook.com/story.php?story_fbid=pfbid0vepUQLYJdMM5NPnovhHr6wNhLBXqZmZPJZWNaSVwjiSjnTZ3MB6kcaMPYnt7cCqrl&id=101095181629486&sfnsn=wiwspwa&mibextid=RUbZ1f'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Kisan Ghosh'
                                imageUrl='images/drawings/kisan2.jpg'
                                body='This is the self portrait of me Kisan Ghosh .'
                                buttonUrl='https://www.facebook.com/GhoshKisan?mibextid=ZbWKwL'
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <ArtCard
                                title='Supriyo Maji'
                                imageUrl='images/drawings/supriyo.jpg'
                                body='This is the portrait of my college senior Supriyo Maji.'
                                buttonUrl='https://www.facebook.com/GhoshKisan?mibextid=ZbWKwL'
                            />
                        </div>
                    </div>
                </div>
                <div className="btn-main-art ">
                        <a href="/allart"><button>See All</button></a>
                </div>
            </div>
        </>
    );
};

export default art;
