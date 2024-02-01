import MutliCriteriaSearch from '$lib/MutliCriteriaSearch';
import prisma from '$lib/prisma';
import { describe, it, expect } from 'vitest';

describe('sum test', async () => {
	const criteria = new MutliCriteriaSearch("mauvais prix");
	console.log(await criteria.exec(prisma, 0, 1))
});
