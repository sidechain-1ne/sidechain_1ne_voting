// Initialize vote counts
let voteCounts = {
    1: 0,
    2: 0,
    3: 0
};

// Function to record votes
function vote(option) {
    if (voteCounts[option] !== undefined) {
        voteCounts[option] += 1;
    }
}

// Function to reset vote counts to 0
function resetVoteCounts() {
    voteCounts = {
        1: 0,
        2: 0,
        3: 0
    };
}

// Export the voteCounts object, vote function, and reset function
module.exports = {
    voteCounts,
    vote,
    resetVoteCounts
};