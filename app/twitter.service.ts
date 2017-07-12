export class TwitterService {
    private usersDetails = [
            {
                name: 'Manikandan',
                twitterName: 'manipvi20',
                status: 'Looking for new changes',
                totalLikes: 55,
                image: 'http://lorempixel.com/100/100/people/5/',
                isLiked: false,
            },
            {
                name: 'Senthil Anand',
                twitterName: 'anandganesan',
                status: 'Never Give up',
                totalLikes: 25,
                image: 'http://lorempixel.com/100/100/people/6/',
                isLiked: false,
            },
            {
                name: 'HCL Techonologies',
                twitterName: 'hcltechnologies',
                status: 'We are Expert in Techonologies',
                totalLikes: 33,
                image: 'http://lorempixel.com/100/100/people/7/',
                isLiked: true,
            }
        ]
    getTwitterUsers(): any[]{
        return this.usersDetails;
    }
    updateNewData(eventData) {
        for(let user of this.usersDetails) {
            if(user.twitterName === eventData.twitteName){
                console.log(eventData);
                user.isLiked = eventData.isLiked;
                user.totalLikes = eventData.totalLikes;
            }
        }
    }
}
