// Initialize vote counts
let voteCounts = {
    1: 0,
    2: 0,
    3: 0
};

// Temporary array to store collected votes
let collectedVotes = [];

// Function to record votes
function vote(option) {
    if (voteCounts[option] !== undefined) {
        collectedVotes.push(option); // Collect votes in an array
    }
}

// Function to reset vote counts to 0
function resetVoteCounts() {
    voteCounts = {
        1: 0,
        2: 0,
        3: 0
    };
    collectedVotes = []; // Clear the collected votes array
}

// Export the voteCounts object, vote function, and reset function
module.exports = {
    voteCounts,
    vote,
    resetVoteCounts,
    collectedVotes // Export the collectedVotes array
};
