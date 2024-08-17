import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log('Admin Connecting to Kafka');
  await admin.connect();
  console.log('Admin Connected to Kafka');
  
  console.log('Creating topics');
  await admin.createTopics({
    topics: [
      {
        topic: 'test-topic',
        numPartitions: 2
      },
    ],
    validateOnly: false,
  })
  console.log('Topic Created');

  console.log('Disconnecting from Kafka');
  await admin.disconnect();
  console.log('Disconnected from Kafka');
}

init();