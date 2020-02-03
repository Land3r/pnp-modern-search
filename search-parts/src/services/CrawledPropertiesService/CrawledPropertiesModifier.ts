import { BaseQueryModifier } from '../ExtensibilityService/BaseQueryModifier'
import { IQueryModifierInput, IQueryModification } from '../../models/IQueryModification';

export class CrawledPropertiesModifier extends BaseQueryModifier {

    public static readonly DisplayName: string = 'Sample Query Modifier';
    public static readonly Description: string = 'Adds a filter to the query so that only word documents are returned.';

    public async onInit(): Promise<void> {
        // this._ctx // SPFx Webpart Context
    }

    public async modifyQuery(query: IQueryModifierInput): Promise<IQueryModification> {

        console.error("I am loaded and query is:"+query.queryText);

        // e.g. Always return docx files
        const newQueryText = `${query.queryText} fileextension:docx`;

        // Leave query template unchanged
        const newQueryTemplate = query.queryTemplate;

        return {
            queryText: newQueryText,
            queryTemplate: newQueryTemplate
        } as IQueryModification;
    }
}
