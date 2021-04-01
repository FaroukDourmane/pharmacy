<script>
    import '../../public/assets/css/commonQuestions.css';
    
    let questions = [
        {
            id: 1,
            question: "Guarantee the quality ?",
            "answer": "Yes, GPM factory and strict quaity system to guarantee the best quality."
        },
        {
            id: 2,
            question: "Delivery ?",
            "answer": "We usually sent the order out in 3 days after the payment. Small order by courier, Bulk order shipped by air or sea. Delivery time depends on your order quantity."
        },
        {
            id: 3,
            question: "Which kind of payment terms do you accept ?",
            "answer": "you can pay by T/T,Western Union or moneygram ,please contact us if there are other requirements."
        },
        {
            id: 4,
            question: "Free sample ?",
            "answer": "Yes, we can offer free sample, but freight charges will be at your account."
        },
        {
            id: 5,
            question: "Do you have branch offices ?",
            "answer": "Yes, we have branch offices in North America and Europe."
        },
        {
            id: 6,
            question: "24h service ?",
            "answer": "We can give fast reply in 24 hours."
        },
        {
            id: 7,
            question: "Do you guarantee the delivery ?",
            "answer": "Yes, we will resent the package for free if lost."
        },
    ];

    let activeQuestion = 0;

    const handleQuestion = (id) => {
        if ( id == activeQuestion ) { activeQuestion = 0; return; }
        activeQuestion = id;
    }    
</script>

<div class="commonQuestionBox">
    {#each questions as obj}
        <div class="question {(activeQuestion == obj.id) ? 'active' : ''}" on:click={() => handleQuestion(obj.id)}>
            <span class="toggler"> <img src="/assets/svg/qst-chevron.svg" alt="" /> </span>
            <h4>{obj.question}</h4>
            <p>{obj.answer}</p>
        </div>
    {/each}    
</div>