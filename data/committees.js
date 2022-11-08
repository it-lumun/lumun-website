const committeesData = [
    {
        "title": 'Disarmament and International Security Committee',
        "chairs": 'Fatima Farooq Chishti and Hubaib Shehryar',
        "description": 'The Russo-Ukraine Crisis has grown into the largest military mobilisation in Europe since World War II. In January of 2022, President Vladmir Putin ordered Russian forces to gather at the Ukrainian border, marking the beginning of a crisis that trickled into a full fledged war tilting into a potential nuclear war. The constant back and forth between the two countries has caused major international political, economical and humanitarian chaos, with countries rushing to the Ukrainian fronts in order to establish some form of peace.'
    },
    {
        "title": 'Social, Cultural, and Humanitarian Committee ',
        "chairs": 'Amna Naqvi and Taimur Azfar',
        "description": 'This year SOCHUM will focus on the socio-legal implications of the violations of International Humanitarian Law by Non-state actors in light of four key ongoing conflicts. The aim of the discussion on this topic is to help analyse whether International Humanitarian Law functions as a potent deterrent tool in light of its complicated application in conflicts spurned by aggravated non-state groups. Through the course of our debate, we wish to come to a conclusive answer as to the role of both International Law and the International Community in ensuring accountability of all those groups engaged in some of the most outrageously heinous war crimes against the weakest stakeholders in society.',
    },
    {
        "title": 'Special Political and Decolonization Committee ',
        "chairs": 'Muhammad Rafeh and Mustafa Khurshid ',
        "description": `From Armenia and Azerbaijan to Ukraine and Crimea, post-Soviet countries have faced violent ethnic and territorial conflict. Despite having (de jure) authority, countries struggled to establish sovereignty and were overpowered by separatist (de-facto) rebel states. With time, these longstanding territorial disputes developed into stalemates or “frozen conflicts.” 

        However, with the growing involvement of Russia and the United States, frozen conflicts are frozen no more, and armed struggle persists once again. In 2022, it becomes critical for us to answer questions of sovereignty and self-determination and find a lasting political solution for these frozen conflicts.
        `,
    },
    {
        "title": 'Crisis Committee ',
        "chairs": 'Rohail Hasan Siddiqui and Sairam Miran',
        "description": `This year's Crisis Committee is everything that LUMUN strives to embody: rigorous, fast-paced and unprecedented. As a result of poor choices made over decades, humanity has finally fallen prey to itself and now struggles to survive in a new world order. The power dynamics between countries (should sovereign states still exist..) have completely shifted and a whole new world awaits humans beyond the periphery of Earth. In this year's futuristic Committee, delegates are tasked with one final chance to save themselves. Will they perish - as humans often do - or finally manage to rise for good?`,
    },
    {
        "title": 'United Nations Security Council',
        "chairs": 'Ammaar Aamir Sheikh',
        "description": `A vital branch of the UN, the Security Council is equipped with the ability to establish peacekeeping operations, impose international sanctions, and authorise military actions, all via the passing of resolutions.

        This year's simulation of the UNSC at LUMUN will be a dual delegate Crisis Committee, tasked with handling fast paced predicaments over the East China Sea dispute. In particular, the mineral rich Diaoyu/Senkaku islands, located northeast of Taiwan, are the source of conflict between Japan and China, with both countries laying claim to the region.
        
        A dispute, with history dating back to the 19th century, exacerbated in the last few decades will be the test of delegates' wits, versatility and diplomacy.
        `,
    },
    {
        "title": 'Pakistan National Assembly:',
        "chairs": 'Rafay Hakeem and Fatima Sarfaraz',
        "description": `The Pakistan National Assembly (PNA) is the lower house of the Pakistani Parliament, with its mandate proscribed within the Constitution of Pakistan. It is the legislative core of the parliamentary republic of Pakistan, consisting of elected representatives from constituencies across Pakistan’s four provinces.
 
        Broadly, it elects the Prime Minister from amongst the assembly who forms the cabinet, drafts ordinary legislation, has the function of legislating on and approving Money Bills, and acts as a forum of discussion regarding the agendas of the government and opposition parties
        The Committee will operate in the 2019 context, not taking account of any post-2019 events in the political landscape.
        `,
    },
    {
        "title": 'International Monetary Fund:',
        "chairs": 'Ozair Zafar and Tarfa Siddiqui',
        "description": ` IMF at LUMUN this year simulates the Global financial crisis as it happened. The committee will try to reimagine the crisis with severe worldwide economic consequences. At IMF, we will rigorously investigate the causes of the crisis and help remedy and save what has been left behind. We will start from when the crisis began to escalate and simulate how financial and economic leaders behave to ensure the minimize global fallout.`,
    },
    {
        "title": 'North Atlantic Treaty Organization:',
        "chairs": 'Hamza Saeed and Owais Sabri',
        "description": `The North Atlantic Treaty Organization protects vulnerable states from aggression. The compulsion to protect fellow members and the deterrence it inspires has led to a marked drop in international conflicts. But who gets this protection, and what exactly is the compulsion of the Responsibility to Protect? These questions are now more important than ever. This year NATO will look back at the effectiveness of its core principles, consider its limits to membership, and evaluate how to approach international crises, in both the present, and the future.`,
    },
    {
        "title": 'Commission on the Status of Women',
        "chairs": 'Mariam Khawaja and Shajeea',
        "description": `The Commission on the Status of Women (CSW) is the main intergovernmental organization in the world that is solely committed to the progression of gender equality and women's empowerment. The CSW plays a critical role in advocating for women's rights, reflecting the complexity of women's lives throughout the globe, and establishing international norms for gender equality and women's empowerment. It was created as a commission of the Economic and Social Council (ECOSOC) with the goals of advancing women's rights in the political, economic, civic, cultural, and educational spheres, as well as putting the ideals of equality between men and women into implementation.
        736 million women have experienced physical or sexual abuse, according to UN Women. Femicide is one kind of violence against women that has become a crucial global indicator of violence and gender inequality. Every day, 137 women are slain by family members, according to UN Women. At least one-third of femicides are committed by a husband or romantic partner. A significant portion of femicides are what are known as "honor killings," in which a family member kills a woman or a girl because of claimed or real inappropriate sexual behavior. It can also take place in the form of killings of women and girls in the context of armed conflict; targeted killings of women and girls; dowry-related killings of women; killings of women and girls because of their sexual orientation and gender identity; killings of aboriginal and indigenous women and girls because of their gender; deaths associated with genital mutilation; and other gender-based murders. 
        `,
    },
    {
        "title": 'United Nations Development Program',
        "chairs": 'Omar Ibn Sajjad and Danyal Maqbool',
        "description": `The United Nations Development Programme(UNDP) is a UN agency that works for the sustainable development of nations under the United Nations banner. It aims to eliminate poverty, reduce inequalities, and help nations achieve the UN sustainable development goals or SDGs.

        The Russia-Ukraine war began with the invasion of Ukraine by Russian forces on February 24, 2022. With the developing situation and a polarised world reacting to mitigate it, the global economy has suffered greatly. Food and energy prices have surged, and the great divide between the developing/developed world has never been more significant. The committee shall take place in the present. Recognizing the challenges developing countries face in light of this crisis, the committee shall take all possible steps to uplift and restore the countries most impacted by this situation.
        `,
    },
    {
        "title": 'United Nations Office on Drugs and Crime',
        "chairs": 'Injeel Abdul Aziz and Rayan Faisal',
        "description": `The LUMUN team bearing the torch for The United Nations Commission on Drugs and Crime envisions the commission from a grass roots focus on Gender. We set the topic agenda as 'Gender and Criminal Justice Reform' and aim to arcade: a dissection of crimes, specific stakeholders, the gendered nature of such, magnitudes of perpetuation, relevant institutions, norms, the role of the state along with a gradual build up towards mechanisms necessary to bring institutionalized reform. UNODC this year aims to spearhead conversations considered taboo and places an impetus on the need for the world to reimagine its institutions with gender responsiveness in mind.`,
    },
]