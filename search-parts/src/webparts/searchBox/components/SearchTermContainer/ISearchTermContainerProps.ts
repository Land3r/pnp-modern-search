import { PageOpenBehavior, QueryPathBehavior } from '../../../../helpers/UrlHelper';
import { ISuggestionProviderInstance } from '../../../../services/ExtensibilityService/ISuggestionProviderInstance';
import ISearchQuery from '../../../../models/ISearchQuery';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface ISearchTermContainerProps {

    onSearch: (searchQuery: ISearchQuery) => void;
    enableQuerySuggestions: boolean;
    suggestionProviders: ISuggestionProviderInstance<any>[];



    openBehavior: PageOpenBehavior;
    queryPathBehavior: QueryPathBehavior;
    queryStringParameter: string;
    inputValue: string;
    enableDebugMode: boolean;
    isStaging: boolean;
    placeholderText: string;
    domElement: HTMLElement;

    /**
     * The current theme variant
     */
    themeVariant: IReadonlyTheme | undefined;
}
