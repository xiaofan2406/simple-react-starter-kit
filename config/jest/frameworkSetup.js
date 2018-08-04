import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import 'react-testing-library/cleanup-after-each';

expect.addSnapshotSerializer(createSerializer(emotion));
