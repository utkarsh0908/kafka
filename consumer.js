import kafka from "./client.js";

async function init() {
  const consumer = kafka.consumer({groupId: 'test-group'});

  console.log('Connecting consumer to Kafka');
  await consumer.connect();
  console.log('Connected consumer to Kafka');

  await consumer.subscribe({ topics: ['testing'], fromBeginning: true });

  console.log('running messages');
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      })
    },
  })
  console.log('fetched messages');

  console.log('Disconnecting consumer from Kafka');
  await consumer.disconnect();
}

init();