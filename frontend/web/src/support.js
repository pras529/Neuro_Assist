document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            name: "Telehealth Therapy",
            description: "Online therapy sessions tailored to neurodivergent individuals.",
            targetGroup: "Children (9+), Teens, Adults",
            conditions: "ASD, ADHD",
            source: "https://quirkybrain.net"
        },
        {
            name: "Social Skills Groups",
            description: "Facilitated small groups aimed at improving social interactions.",
            targetGroup: "Children, Teens",
            conditions: "ASD",
            source: "https://mindsautism.com"
        },
        {
            name: "Parent Workshops",
            description: "Educational sessions providing tools for parents.",
            targetGroup: "Parents",
            conditions: "ASD",
            source: "https://mindsautism.com"
        },
        {
            name: "Neuropsychological Assessments",
            description: "Comprehensive evaluations for developmental and learning disorders.",
            targetGroup: "Children",
            conditions: "ASD, ADHD",
            source: "https://pediatricneurodiversity.com"
        },
        {
            name: "Animal-Assisted Therapy",
            description: "Therapy involving animals to improve emotional and social functioning.",
            targetGroup: "Children, Adults",
            conditions: "ASD, ADHD, Dementia",
            source: "https://en.wikipedia.org/wiki/Animal-assisted_therapy"
        },
        {
            name: "Equine-Assisted Therapy",
            description: "Therapy sessions with horses for social and motor skills improvement.",
            targetGroup: "Children, Teens, Adults",
            conditions: "ASD",
            source: "https://en.wikipedia.org/wiki/Equine-assisted_therapy"
        },
        {
            name: "Behavioral Consultation",
            description: "Strategies for managing behavioral concerns.",
            targetGroup: "Children, Teens, Adults",
            conditions: "ASD, ADHD",
            source: "https://pacificclinics.org"
        },
        {
            name: "Case Management Services",
            description: "Coordinating care and accessing resources for neurodivergent individuals.",
            targetGroup: "Children, Teens, Adults",
            conditions: "Various neurodevelopmental conditions",
            source: "https://neurodiversecommunities.com"
        },
        // {
        //     name: "Educational Support Programs",
        //     description: "Supporting neurodivergent students in education.",
        //     targetGroup: "Children, Teens",
        //     conditions: "ASD, ADHD",
        //     source: "https://mindsautism.com"
        // }
    ];

    const container = document.getElementById("services-container");
     const searchBar = document.getElementById("search-bar");
    const filterGroup = document.getElementById("filter-group");
    const filterCondition = document.getElementById("filter-condition");

    // function displayServices(filteredServices) {
    //     container.innerHTML = "";
    //     filteredServices.forEach(service => {
    //         const card = document.createElement("div");
    //         card.classList.add("service-card");
    //         card.innerHTML = `<h2>${service.name}</h2><p>${service.description}</p><p><strong>Target:</strong> ${service.targetGroup}</p><p><strong>Conditions:</strong> ${service.conditions}</p><a href="${service.source}" target="_blank">Learn More</a>`;
    //         container.appendChild(card);
    //     });
    // }

    function displayServices(filteredServices) {
        container.innerHTML = "";
        filteredServices.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");
    
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h2>${service.name}</h2>
                    </div>
                    <div class="card-back">
                        <p>${service.description}</p>
                        <p><strong>Target:</strong> ${service.targetGroup}</p>
                        <p><strong>Conditions:</strong> ${service.conditions}</p>
                        <a href="${service.source}" target="_blank">Learn More</a>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    function filterServices() {
        const searchText = searchBar.value.toLowerCase();
        const group = filterGroup.value;
        const condition = filterCondition.value;

        const filtered = services.filter(service =>
            service.name.toLowerCase().includes(searchText) &&
            (group === "" || service.targetGroup.includes(group)) &&
            (condition === "" || service.conditions.includes(condition))
        );

        displayServices(filtered);
    }

    searchBar.addEventListener("input", filterServices);
    filterGroup.addEventListener("change", filterServices);
    filterCondition.addEventListener("change", filterServices);

    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    displayServices(services);
});
