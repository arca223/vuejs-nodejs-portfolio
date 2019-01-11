const myself = {
    firstname: "Maxime",
    lastname: "Cocquempot",
    surname: "Le Coq",
    age: 25,
    experience: 5
};

const state = {
    stories: [
        {
            text: `Hi, I am ${myself.firstname} (${myself.surname}) ${myself.lastname},` +
                ` my friends often call me Le Coq or Coq (as for "Rooster", of course.. Please. :) ).` +
                ` I am a ${myself.age}yo French Web Engineer, specialized in PHP/JS Stacks` +
                ` with ${myself.experience} years experience.<br />` +
                ` I was living for four months in Japan (end of 2018, start of 2019.` +
                ` I took my chances and grabbed the opportunity to leave France` +
                ` and my nice company Abbeal to challenge myself and discover this new culture` +
                ` and new work environment.<br />` +
                ` In the meantime, I did learn new technologies, as VueJS, Docker, NodeJS` +
                ` as I was developing this website and I plan on learning Laravelor` +
                ` something else depending my needs and the hype.`
            ,
            picture: "https://picsum.photos/400/300?1"
        },
        {
            text: `I grew up being into technologies thanks to my brother being a lot into it.` +
                ` As he went through IT studies, I kind of enjoyed this path and followed him. We are now` +
                ` both two IT engineers. May our path cross during our careers but I doubt about it since he is` +
                ` more into big companies while I do prefer startup environment.<br /><br />` +
                ` I did start IT at high school (16-17yo) while we could choose one optional class. But I already` +
                ` knew before that that where I would go I think. And so did my foreseeing happened as I joined the` +
                ` DUT2 in Grenoble, ranking quite well in France.<br /> I did work hard for two years to join an` +
                ` Engineering school after that. I was first planning to join a continuous formation but` +
                ` finally after hearing so much about Apprenticeship, I took on and started my superior studies ` +
                ` with the great advantage of having professional and technical experience.<br />` +
                ` Then, I graduated after three years of both studies and working experiences, having learn` +
                ` a lot both theoretically and practically, learning a lot and getting many best practices from` +
                ` my co-workers who helped me a lot to grow. And what would help me for a great deal in my work` +
                ` career was the opportunity to try and work with the framework Symfony.`
            ,
            picture: "https://picsum.photos/400/300?2"
        },
        {
            text: `Out in the world after my engineering school with working experiences, finding a job` +
                ` wasn't complicated. The difficulty resided in finding the company that would allow me to focus` +
                ` on the tech stacks I was experienced with and which one I wanted to continue focusing on.<br />` +
                ` And guess what ? My first pick.. was obviously a bad pick. I was promised things that each time ` +
                ` was being proven wrong and changed. But as a new little IT guy in this vast world of companies` +
                ` and projects, you kind of continue without arguing.<br /><br />` +
                ` Well that was not my motto. Four months after being deceived, I had the great opportunity` +
                ` to join Abbeal to finally work on what I am the best.<br />It has been nearly 2 years of great` +
                ` projects with different clients, projects and stacks to focus on PHP/JS. Both growing in` +
                ` specialization and versatility. In my opinion, this is a major advantage as I learning a lot of` +
                ` best practices and adapt myself pretty well and fast on new projects/teams.`
            ,
            picture: "https://picsum.photos/400/300?3"
        },
        {
            text: `I always enjoyed the challenges. Being bored at work is my worst nightmare, because you feel not` +
                ` being at your top of capacities, sometimes you have nothing to do, but it is badly seen` +
                ` to do nothing or leave work early, thanks to the old way of working. I would then learn` +
                ` by myself anyway to keep on improving. This is probably why I love and prefer startup` +
                ` environment<br /><br />But the point is, I had a great opportunity to to move to Japan` +
                ` and start a new experience. What a challenge to move to a country with such culture` +
                ` while not speaking the language. I was really interesting to be there, discover a lot` +
                ` but yet sadly, the job and the VISA was more difficult to obtain than I'd have expected.<br />` +
                `My great experience ended finally after this project was nearly done. And moving back to France,` +
                ` I knew I could rely on Abbeal to hire me back. So here I go, thrilled to join a new` +
                ` client and project!`
            ,
            picture: "https://picsum.photos/400/300?4"
        },
    ]
};


const getters = {
    getStories: (state) => {
        return state.stories;
    }
};
const mutations = {};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
};